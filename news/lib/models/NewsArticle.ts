// ============================================================
// NewsArticle Class
// ============================================================
// A domain model representing a single news article.
// Practice: constructors, properties, methods, getters, and
// TypeScript access modifiers.
// ============================================================

export class NewsArticle {
 public readonly id: string
  title: string
  author: string
  content: string
  category: string
  publishedAt: Date
  imageUrl: string

  // Decide: should these be public, private, or readonly?
  // Hint: use constructor parameter shorthand to keep it concise, e.g.
  //   constructor(public readonly id: string, ...) {}

  constructor(  id: string, title: string , author: string  , content: string ,publishedAt: Date, category: string, imageUrl: string ) {

    // TODO: Accept all properties as constructor parameters.
    // If you don't use parameter shorthand above, assign them here.
    this.id = id
    this.title = title
    this.author = author 
    this.content = content
    this.publishedAt = publishedAt
    this.category = category 
    this.imageUrl = imageUrl
  }

  // ---------- Methods ----------

  getSummary(maxLength: number = 60): string {
  
    if ( this.content.length > maxLength){
      return this.content.slice(0, maxLength) + '...'
    } else {
      return  this.content 
    } 
    
  }

  formatPublishedDate(): string {

 
 return  this.publishedAt.toLocaleDateString('de-DE' )
  
  }
  // TODO: formatPublishedDate(): string
  // Return a human-readable date string, e.g. "Mar 13, 2026"
  // Hint: use Date.toLocaleDateString with options { month: "short", day: "numeric", year: "numeric" }
isRecent(): boolean{


 const date = new Date()
 date.setDate(date.getDate() - 1)


  return this.publishedAt > date 


 
}
  

  // ---------- Getters ----------
get readingTime(): number{
  
  const content = this.content;
  const contentSpaces = content.split(" ")
  return Math.ceil(contentSpaces.length / 200)


}
  // TODO: get readingTime(): number
  // Estimate reading time in minutes based on content length.
  // Average reading speed is ~200 words per minute.
  // Hint: split content by spaces, divide length by 200, Math.ceil the result.
  // Return at least 1.
get isBreakingNews(): boolean{
  return this.category === 'breaking' && this.isRecent()
 
}
  // TODO: get isBreakingNews(): boolean
  // Return true if the category is "breaking" AND the article is recent.

  // ---------- Static Method ----------
static fromApiResponse(data: Record<string, unknown>): NewsArticle{
  return new NewsArticle(data.id as string , data.title as string , data.author as string, data.content as string , new Date(data.publishedAt as string) , data.category as string , data.imageUrl as string  )
}

}


