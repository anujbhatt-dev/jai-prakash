"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight, Search, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type booksData from "../data/books.json";
import { MotionReveal } from "./motion-reveal";

type Book = (typeof booksData)[number];

export function BookCatalogue({
  books,
  reportedTotal,
}: {
  books: Book[];
  reportedTotal: number;
}) {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const reduceMotion = useReducedMotion();
  const filteredBooks = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return books;
    return books.filter((book) =>
      `${book.title} ${book.engTitle}`.toLocaleLowerCase().includes(normalized),
    );
  }, [books, query]);
  const pageCount = Math.max(1, Math.ceil(filteredBooks.length / pageSize));
  const visibleBooks = filteredBooks.slice((page - 1) * pageSize, page * pageSize);

  const goToPage = (nextPage: number) => {
    setPage(nextPage);
    document.getElementById("book-grid")?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  useEffect(() => {
    const updatePageSize = () => {
      const columns = window.innerWidth <= 650 ? 2 : window.innerWidth <= 1100 ? 4 : 5;
      setPageSize(columns * 5);
      setPage(1);
    };

    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  return (
    <section className="section books-section" id="books" aria-labelledby="books-title">
      <div className="section-inner">
        <MotionReveal className="catalogue-heading">
          <div className="catalogue-heading-copy">
            <p className="eyebrow"><span>02</span> The collection</p>
            <h2 id="books-title">Books &amp; <em>ideas.</em></h2>
            <p className="section-deck">
              Browse the covers and titles preserved in this archive.
            </p>
          </div>
          <p className="catalogue-total">
            <strong>{reportedTotal}</strong><span>reported books</span>
            <small>{books.length} covers catalogued here</small>
          </p>
        </MotionReveal>

        <div className="catalogue-tools">
          <label className="search-field">
            <Search size={18} strokeWidth={1.5} aria-hidden="true" />
            <span className="sr-only">Search titles in Hindi or English</span>
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Search by title in Hindi or English"
              autoComplete="off"
            />
            {query && (
              <button className="clear-search" type="button" onClick={() => { setQuery(""); setPage(1); }} aria-label="Clear search">
                <X size={16} />
              </button>
            )}
          </label>
          <p className="result-count" aria-live="polite">
            {filteredBooks.length > 0
              ? `Showing ${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, filteredBooks.length)} of ${filteredBooks.length}`
              : "0 titles"}
          </p>
        </div>

        {filteredBooks.length > 0 ? (
          <motion.ul className="book-grid" id="book-grid" layout={!reduceMotion}>
            <AnimatePresence initial={false} mode="popLayout">
              {visibleBooks.map((book, index) => (
                <motion.li
                  className="book-card"
                  key={book.filename}
                  layout={!reduceMotion}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: 8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.24, delay: reduceMotion ? 0 : Math.min(index * 0.012, 0.16) }}
                >
                  <div
                    className="book-cover-wrap"
                    style={{ position: "relative", width: "100%", aspectRatio: "0.685", overflow: "hidden" }}
                  >
                    <Image
                      src={`/book-covers/${book.filename}`}
                      alt={`Cover of ${book.title}`}
                      width={350}
                      height={520}
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 560px) 44vw, (max-width: 900px) 28vw, (max-width: 1200px) 21vw, 17vw"
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                    <span className="book-number">{String((page - 1) * pageSize + index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="book-card-copy">
                    <h3>{book.engTitle}</h3>
                    <p lang="hi">{book.title}</p>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        ) : (
          <div className="empty-search" role="status">
            <p>No titles match “{query}”.</p>
            <button className="text-link" type="button" onClick={() => setQuery("")}>
              Clear search <X size={15} aria-hidden="true" />
            </button>
          </div>
        )}

        {filteredBooks.length > 0 && pageCount > 1 && (
          <nav className="catalogue-pagination" aria-label="Book catalogue pages">
            <button
              className="pagination-arrow"
              type="button"
              onClick={() => goToPage(Math.max(1, page - 1))}
              disabled={page === 1}
              aria-label="Previous page"
            >
              <ChevronLeft size={17} aria-hidden="true" /> <span>Previous</span>
            </button>
            <div className="pagination-pages" aria-label={`Page ${page} of ${pageCount}`}>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
                <button
                  className="pagination-page"
                  type="button"
                  key={pageNumber}
                  onClick={() => goToPage(pageNumber)}
                  aria-label={`Page ${pageNumber}`}
                  aria-current={pageNumber === page ? "page" : undefined}
                >
                  {pageNumber}
                </button>
              ))}
            </div>
            <button
              className="pagination-arrow"
              type="button"
              onClick={() => goToPage(Math.min(pageCount, page + 1))}
              disabled={page === pageCount}
              aria-label="Next page"
            >
              <span>Next</span> <ChevronRight size={17} aria-hidden="true" />
            </button>
          </nav>
        )}
      </div>
    </section>
  );
}
