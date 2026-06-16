import ContentPage from './ContentPage'

const blogPosts = [
  {
    title: 'How to Choose the Right Insurance Policy',
    eyebrow: 'Coverage Basics',
    meta: 'April 2026',
    text:
      'Choosing insurance starts with understanding what you need protected, what risks matter most, and how much financial responsibility you can comfortably carry. A good policy should match your life, business, budget, and claims expectations.',
  },
  {
    title: 'Why Reviewing Your Policy Matters',
    eyebrow: 'Policy Review',
    meta: 'April 2026',
    text:
      'Insurance needs change when you move, buy a car, renovate a home, start a business, add employees, or change family responsibilities. A regular review helps catch gaps before they become expensive surprises.',
  },
  {
    title: 'What to Know Before Filing a Claim',
    eyebrow: 'Claims',
    meta: 'April 2026',
    text:
      'Before filing a claim, gather photos, documents, dates, receipts, and any details that explain what happened. Clear information helps your insurance team guide you faster and makes the process easier to manage.',
  },
]

function BlogPage() {
  return (
    <ContentPage
      eyebrow="Insurance Blog"
      title="Helpful Insurance Insights"
      intro="Simple guidance to help you understand coverage, make confident choices, and know what to expect when your policy matters most."
      cards={blogPosts}
    />
  )
}

export default BlogPage
