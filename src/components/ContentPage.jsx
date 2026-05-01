import { Link } from 'react-router-dom'

function ContentPage({ eyebrow, title, intro, sections = [], cards = [], actions = [] }) {
  return (
    <section className="content-page">
      <div className="content-shell space-y-10">
        <article className="content-hero card-surface-light interactive-card interactive-card-light">
          {eyebrow && <p className="content-eyebrow">{eyebrow}</p>}
          <h2 className="card-heading card-text-light mt-3 md:text-5xl">{title}</h2>
          {intro && <p className="card-body card-text-muted-light mt-5 max-w-3xl">{intro}</p>}
        </article>

        {cards.length > 0 && (
          <div className="grid gap-6 md:grid-cols-3">
            {cards.map((card) => (
              <article
                className="content-section card-surface-light interactive-card interactive-card-light"
                key={card.title}
              >
                {card.eyebrow && <p className="content-eyebrow text-xs">{card.eyebrow}</p>}
                <h3 className="content-section-title mt-3">{card.title}</h3>
                {card.meta && <p className="mt-2 text-sm text-app-text-muted">{card.meta}</p>}
                <div className="content-prose mt-4">
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        {sections.length > 0 && (
          <div className="space-y-6">
            {sections.map((section) => (
              <article
                className="content-section card-surface-light interactive-card interactive-card-light"
                key={section.title}
              >
                <h3 className="content-section-title">{section.title}</h3>
                <div className="content-prose mt-4">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.items && (
                    <ul>
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        {actions.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {actions.map((action) => (
              <Link
                className="card-surface-light interactive-card interactive-card-light p-5 text-center text-app-text"
                key={action.label}
                to={action.to}
              >
                <span className="card-subheading card-text-light">{action.label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ContentPage
