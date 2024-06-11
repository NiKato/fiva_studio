// headings.ts
export type HeadingsSortItem = {
  id: number
  spanTitle: string
  title: string
  text: string
}

export const HEADINGS_SORT_ITEMS: HeadingsSortItem[] = [
  {
    id: 1,
    spanTitle: "MOST POPULAR",
    title: "Short Form Content",
    text: "Swipe to explore more videos. Enjoy the journey!",
  },
  {
    id: 2,
    spanTitle: "TOP RATED",
    title: "Long Form Content",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet commodo magna, ac volutpat mi.",
  },
  {
    id: 3,
    spanTitle: "MOST REQUESTED",
    title: "2D Animations",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet commodo magna, ac volutpat mi.",
  },
  {
    id: 4,
    spanTitle: "TESTIMONIALS",
    title: "What did people say?",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    spanTitle: "MOST ASKED",
    title: "Frequently asked questions",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]

export const getHeadingById = (id: number): HeadingsSortItem | undefined =>
  HEADINGS_SORT_ITEMS.find(item => item.id === id)
