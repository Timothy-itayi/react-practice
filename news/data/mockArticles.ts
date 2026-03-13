// ============================================================
// Mock Articles Data
// ============================================================
// Seed data for development. Each object represents a raw
// article from an "API response." Your NewsApiService will
// consume this data.
// ============================================================


// This represents the data BEFORE it becomes a NewsArticle class instance.
//
export interface RawArticle {
    id: string;
    title: string;
    author: string;
    content: string;
    publishedAt: string;
    category: string;
    imageUrl?: string;
}



export const mockArticles: RawArticle[] = [{


    id: '1',
    title: '10 Ways to vibe code in 2026',
    author: 'Timothy itay',
    content: 'In a world of Ai and vibes it is important to use the latest tech right now that is cursor, claude and many more...',
    publishedAt: new Date().toISOString(),
    category: 'technology',
    imageUrl: "/images/image1.jpg",

},
{
    id: "2",
     title: "Local Team Wins Championship",
        author: "John Smith",
     content: "In a thrilling final that went to overtime...",
     publishedAt: "2026-03-10T14:30:00Z",  // a few days ago
     category: "sports",
},
{
    id: "3",
     title: "Vodka is the new Water",
        author: "Valdmir Volk",
     content: "What was just a way to get drunk is now a healthy trend...",
     publishedAt: "2026-05-12T14:30:00Z",  // a few days ago
     category: "lifestyle",
},
{
    id: "4",
     title: "Job Search is easier than ever!",
        author: "Sarah Walker",
     content: "LinkedIn , Seek and indeed are now easier than ever to use...",
     publishedAt: "2026-02-01T14:30:00Z",  // a few days ago
     category: "breaking",
},
{
    id: "5",
     title: "The NBA is worse than ever",
        author: "Skip Bayless",
     content: "Lebron is worse than ever...",
     publishedAt: "2026-03-12T14:30:00Z",  // a few days ago
     category: "sports",
},
{
    id: "6",
     title: "Anthropic Just beat OpenAi again",
        author: "Fireship",
     content: "They had superbowl ads and now they have this...",
     publishedAt: "2026-03-04T14:30:00Z",  // a few days ago
     category: "technology",
},
{
    id: "7",
     title: "Sourdough is making a comeback",
        author: "Jessica Black",
     content: "TikTok is back with a trend that is back on the menu...",
     publishedAt: new Date().toISOString(),  // a few days ago
     category: "breaking",
},
{
    id: "8",
     title: "Apple is back at it with the MacBook neo",
        author: "James bell",
     content: "Macbook neo is beating Google...",
     publishedAt: new Date().toISOString(),  // a few days ago
     category: "breaking",
},
{
    id: "9",
     title: "Dallas is back with a vengence",
        author: "Peter piper",
     content: "No Luka no Davis no problem...",
     publishedAt: "2026-03-10T14:30:00Z",  // a few days ago
     category: "sports",
},{
    id: "10",
     title: "LooksMaxxing is now the rage",
        author: "VibeMaster",
     content: "Bonemashing? why though?...",
     publishedAt: "2026-03-10T14:30:00Z",  // a few days ago
     category: "lifestyle",
},
]



export const availableCategories = [
 { name: 'Technology', slug: 'technology', description: 'Tech'},
 { name: 'Lifestyle', slug: 'lifestyle', description: 'Lifestyle'},
 { name: 'Sports', slug: 'sports', description: 'Sports'},
 { name: 'Breaking', slug: 'breaking', description: 'Breaking News'}

];