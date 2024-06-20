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
    text: "Transform your video content with our expert tips to captivate, engage, and retain your audience from start to finish.",
  },
  {
    id: 3,
    spanTitle: "AND MORE",
    title: "Mixed videos",
    text: "Discover a variety of videos, including wedding highlights, promotional clips, cartoons, and educational content",
  },
  {
    id: 4,
    spanTitle: "TESTIMONIALS",
    title: "What did people say?",
    text: "Discover what people are saying about us in their own words.",
  },
  {
    id: 5,
    spanTitle: "MOST ASKED",
    title: "Frequently asked questions",
    text: "Explore answers to common questions to get the information you need quickly and easily.",
  },
]

export const getHeadingById = (id: number): HeadingsSortItem | undefined =>
  HEADINGS_SORT_ITEMS.find(item => item.id === id)
