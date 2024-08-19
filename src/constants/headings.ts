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
    spanTitle: "headings.spanTitle",
    title: "headings.title",
    text: "headings.text",
  },
  {
    id: 2,
    spanTitle: "headings.spanTitle2",
    title: "headings.title2",
    text: "headings.text2",
  },
  {
    id: 3,
    spanTitle: "headings.spanTitle3",
    title: "headings.title3",
    text: "headings.text3",
  },
  {
    id: 4,
    spanTitle: "headings.spanTitle4",
    title: "headings.title4",
    text: "headings.text4",
  },
  {
    id: 5,
    spanTitle: "headings.spanTitle5",
    title: "headings.title5",
    text: "headings.text5",
  },
]

export const getHeadingById = (id: number): HeadingsSortItem | undefined =>
  HEADINGS_SORT_ITEMS.find(item => item.id === id)
