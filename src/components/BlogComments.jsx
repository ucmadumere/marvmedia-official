import { useCallback, useEffect, useState } from "react";
import Turnstile from "./Turnstile";
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

export default function BlogComments({ slug }) {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);
  const handleTokenChange = useCallback((token) => setTurnstileToken(token), []);

  useEffect(() => {
    const controller = new AbortController();
    setCommentsLoading(true);
    getPublishedPostComments(slug, controller.signal)
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
  }, [slug]);

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setMessage("");

    if (import.meta.env.VITE_TURNSTILE_SITE_KEY && !turnstileToken) {
      setError("Please complete the spam protection check.");
      return;
    }

    try {
      setSubmitting(true);
      await submitPostComment(slug, { ...form, turnstileToken });
      setForm(initialForm);
      setTurnstileToken("");
      setTurnstileResetKey((key) => key + 1);
      setMessage("Thank you. Your comment has been sent for review.");
    } catch (requestError) {
      setError(
        requestError.status === 404
          ? "Comment submission is being connected. Please check back shortly."
          : requestError.message
      );
      setTurnstileToken("");
      setTurnstileResetKey((key) => key + 1);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="blog-comments" aria-labelledby="blog-comments-title">
      <div className="blog-comments-heading">
        <div>
          <span className="blog-comments-eyebrow">The conversation</span>
          <h3 id="blog-comments-title">Comments</h3>
        </div>
        {!commentsLoading && comments.length > 0 && (
          <span className="blog-comments-count">{comments.length}</span>
        )}
      </div>

      <div className="blog-comments-list" aria-live="polite">
        {commentsLoading ? (
          <p className="blog-comments-empty">Loading comments…</p>
        ) : comments.length ? (
          comments.map((item) => (
            <article className="blog-comment" key={item.id || item._id}>
              <div className="blog-comment-avatar" aria-hidden="true">
                {(item.name || "R").trim().charAt(0).toUpperCase()}
              </div>
              <div className="blog-comment-content">
                <div className="blog-comment-meta">
                  <h4>{item.name || "Reader"}</h4>
                  <time dateTime={item.createdAt}>{formatCommentDate(item.createdAt || item.date)}</time>
                </div>
                <p>{item.comment || item.content || item.text}</p>
              </div>
            </article>
          ))
        ) : (
          <p className="blog-comments-empty">No comments yet. Start the conversation.</p>
        )}
      </div>

      <div className="blog-comment-form-card">
        <div className="blog-comment-form-intro">
          {/* <span>Share your perspective</span> */}
          <h4>Leave a comment</h4>
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
          <Turnstile onTokenChange={handleTokenChange} resetKey={turnstileResetKey} />
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
