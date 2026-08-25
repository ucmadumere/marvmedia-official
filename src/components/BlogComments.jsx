import { useCallback, useEffect, useState } from "react";
import Turnstile from "./Turnstile";
import { TURNSTILE_ENABLED } from "../utils/turnstile";
import {
  getPublishedPostComments,
  submitPostComment,
} from "../utils/blogApi";

const initialForm = { name: "", comment: "", website: "" };

const formatCommentDate = (value) => {
  if (!value) return "Recently";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
};

export default function BlogComments({ postId, slug }) {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [replyTo, setReplyTo] = useState(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const handleTokenChange = useCallback((token) => setTurnstileToken(token), []);

  useEffect(() => {
    const controller = new AbortController();
    setCommentsLoading(true);
    if (!postId) {
      setComments([]);
      setCommentsLoading(false);
      return () => controller.abort();
    }
    getPublishedPostComments(postId, controller.signal)
      .then((payload) => {
        const items = Array.isArray(payload) ? payload : payload.comments;
        setComments(Array.isArray(items) ? items : []);
      })
      .catch((requestError) => {
        if (requestError.name !== "AbortError") setComments([]);
      })
      .finally(() => {
        if (!controller.signal.aborted) setCommentsLoading(false);
      });
    return () => controller.abort();
  }, [postId]);

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (TURNSTILE_ENABLED && !turnstileToken) {
      setError("Please complete the spam protection check.");
      return;
    }

    try {
      setSubmitting(true);
      const result = await submitPostComment(postId, {
        name: form.name,
        text: form.comment,
        parentId: replyTo?.id || undefined,
        website: form.website,
        turnstileToken,
      });
      setForm(initialForm);
      setTurnstileToken("");
      setReplyTo(null);
      setTurnstileResetKey((key) => key + 1);
      setMessage(
        result.message || "Thank you. Your comment has been sent for review."
      );
      if (result.status === "approved") {
        const payload = await getPublishedPostComments(postId);
        const items = Array.isArray(payload) ? payload : payload.comments;
        setComments(Array.isArray(items) ? items : []);
      }
    } catch (requestError) {
      setError(requestError.message);
      setTurnstileToken("");
      setTurnstileResetKey((key) => key + 1);
    } finally {
      setSubmitting(false);
    }
  };

  const commentId = (item) => item.id || item._id;
  const topLevelComments = comments.filter((item) => !item.parent);
  const repliesByParent = comments.reduce((groups, item) => {
    if (!item.parent) return groups;
    const parentId = typeof item.parent === "object" ? commentId(item.parent) : item.parent;
    groups[parentId] = [...(groups[parentId] || []), item];
    return groups;
  }, {});

  const startReply = (item) => {
    setReplyTo({ id: commentId(item), name: item.name || "Reader" });
    setError("");
    setMessage("");
    requestAnimationFrame(() => {
      document.getElementById(`comment-form-${slug}`)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  };

  const renderComment = (item, isReply = false) => {
    const id = commentId(item);
    return (
      <article className={`blog-comment${isReply ? " blog-comment-reply" : ""}`} key={id}>
        <div className="blog-comment-avatar" aria-hidden="true">
          {(item.name || "R").trim().charAt(0).toUpperCase()}
        </div>
        <div className="blog-comment-content">
          <div className="blog-comment-meta">
            <h4>{item.name || "Reader"}</h4>
            <time dateTime={item.createdAt}>{formatCommentDate(item.createdAt || item.date)}</time>
          </div>
          <p>{item.comment || item.content || item.text}</p>
          {!isReply && (
            <button className="blog-comment-reply-button" type="button" onClick={() => startReply(item)}>
              Reply
            </button>
          )}
          {!isReply && repliesByParent[id]?.length > 0 && (
            <div className="blog-comment-replies">
              {repliesByParent[id].map((reply) => renderComment(reply, true))}
            </div>
          )}
        </div>
      </article>
    );
  };

  return (
    <section className="blog-comments" aria-labelledby="blog-comments-title">
      <div className="blog-comments-heading">
        <div>
          {/* <span className="blog-comments-eyebrow">The conversation</span> */}
          <h3 id="blog-comments-title">Comments</h3>
        </div>
        {!commentsLoading && comments.length > 0 && (
          <span className="blog-comments-count">{comments.length}</span>
        )}
      </div>

      <div className="blog-comments-list" aria-live="polite">
        {commentsLoading ? (
          <p className="blog-comments-empty">Loading comments…</p>
        ) : topLevelComments.length ? (
          topLevelComments.map((item) => renderComment(item))
        ) : (
          <p className="blog-comments-empty">No comments yet. Start the conversation.</p>
        )}
      </div>

      <div className="blog-comment-form-card" id={`comment-form-${slug}`}>
        <div className="blog-comment-form-intro">
          {/* <span>Share your perspective</span> */}
          <h4>{replyTo ? `Reply to ${replyTo.name}` : "Leave a comment"}</h4>
          {replyTo && (
            <button className="blog-comment-cancel-reply" type="button" onClick={() => setReplyTo(null)}>
              Cancel reply
            </button>
          )}
          {/* <p>Comments appear after review.</p> */}
        </div>
        <form className="blog-comment-form" onSubmit={handleSubmit}>
          <div className="blog-comment-honeypot" aria-hidden="true">
            <label htmlFor={`comment-website-${slug}`}>Website</label>
            <input id={`comment-website-${slug}`} name="website" value={form.website} onChange={handleChange} tabIndex="-1" autoComplete="off" />
          </div>
          <div>
            <label htmlFor={`comment-name-${slug}`}>Name</label>
            <input id={`comment-name-${slug}`} name="name" value={form.name} onChange={handleChange} maxLength="120" autoComplete="name" required />
          </div>
          <div>
            <label htmlFor={`comment-body-${slug}`}>Comment</label>
            <textarea id={`comment-body-${slug}`} name="comment" value={form.comment} onChange={handleChange} minLength="3" maxLength="2000" rows="5" required />
          </div>
          <Turnstile action="comments" onTokenChange={handleTokenChange} resetKey={turnstileResetKey} />
          {error && <p className="blog-comment-notice is-error" role="alert">{error}</p>}
          {message && <p className="blog-comment-notice is-success" role="status">{message}</p>}
          <button className="blog-comment-submit" type="submit" disabled={submitting}>
            {submitting ? "Sending…" : "Submit comment"}
          </button>
        </form>
      </div>
    </section>
  );
}
