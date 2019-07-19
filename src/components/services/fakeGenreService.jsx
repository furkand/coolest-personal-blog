export const genres = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Design" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Software" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "React" }
  ];
  
  export function getGenres() {
    return genres.filter(g => g);
  }
  