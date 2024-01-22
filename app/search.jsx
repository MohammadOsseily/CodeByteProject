'use client'
import React, { useState } from 'react';



const articles = [
    {
      id: 1,
      title: 'Introduction to React',
      content: 'React is a JavaScript library for building user interfaces.',
      date: 'Jan 01, 2022',
    },
    {
      id: 2,
      title: 'State and Props in React',
      content: 'In React, components can have state and receive props.',
      date: 'Feb 15, 2022',
    },
    {
      id: 3,
      title: 'Understanding Hooks in React',
      content: 'React introduced hooks to allow functional components to manage state and side effects.',
      date: 'Mar 10, 2022',
    },
    {
      id: 4,
      title: 'React Router: Navigating in React Applications',
      content: 'React Router is a standard library for routing in React applications.',
      date: 'Apr 05, 2022',
    },
    {
      id: 5,
      title: 'Styling in React: CSS-in-JS and Styled Components',
      content: 'Various approaches exist for styling React components, including CSS-in-JS and Styled Components.',
      date: 'May 20, 2022',
    },
    {
      id: 6,
      title: 'Redux: Managing State in Large React Applications',
      content: 'Redux is a predictable state container for JavaScript applications, commonly used with React.',
      date: 'Jun 15, 2022',
    },
    {
      id: 7,
      title: 'Server-Side Rendering (SSR) with Next.js',
      content: 'Next.js enables server-side rendering and other advanced features in React applications.',
      date: 'Jul 01, 2022',
    },
    {
      id: 8,
      title: 'Testing React Applications: Jest and React Testing Library',
      content: 'Jest and React Testing Library are popular tools for testing React applications.',
      date: 'Aug 12, 2022',
    },
    {
      id: 9,
      title: 'GraphQL in React: Fetching Data Efficiently',
      content: 'GraphQL is a query language for APIs, often used to fetch data in React applications.',
      date: 'Sep 25, 2022',
    },
    {
      id: 10,
      title: 'Progressive Web Apps (PWAs) with React',
      content: 'Progressive Web Apps bring a native app-like experience to web applications; React can be used to build them.',
      date: 'Oct 10, 2022',
    },
    {
      id: 11,
      title: 'Code Splitting in React: Optimizing Performance',
      content: 'Code splitting is a technique to improve the performance of React applications by loading code only when needed.',
      date: 'Nov 02, 2022',
    },
    {
      id: 12,
      title: 'React Native: Building Mobile Apps with React',
      content: 'React Native allows developers to build mobile applications using React and native components.',
      date: 'Dec 20, 2022',
    },
    {
      id: 13,
      title: 'React Context: Global State Management in React',
      content: 'React Context provides a way to share state across components without prop drilling.',
      date: 'Jan 15, 2023',
    },
    {
      id: 14,
      title: 'Error Boundary in React: Handling Errors Gracefully',
      content: 'Error boundaries are components in React that can catch JavaScript errors anywhere in their child component tree.',
      date: 'Feb 28, 2023',
    },
    {
      id: 15,
      title: 'React Hooks: useEffect and Managing Side Effects',
      content: 'The useEffect hook in React is used for handling side effects in functional components.',
      date: 'Mar 15, 2023',
    },
    {
      id: 16,
      title: 'React and TypeScript: A Powerful Combination',
      content: 'TypeScript is a superset of JavaScript that adds static types to your code, and it works seamlessly with React.',
      date: 'Apr 10, 2023',
    },
    {
      id: 17,
      title: 'React Performance Optimization Techniques',
      content: 'Optimizing the performance of React applications involves various techniques, such as memoization and shouldComponentUpdate.',
      date: 'May 25, 2023',
    },
    {
      id: 18,
      title: 'React 18: What to Expect in the Latest Version',
      content: 'React 18 introduces new features and improvements, including concurrent rendering and automatic batching.',
      date: 'Jun 18, 2023',
    },
    {
      id: 19,
      title: 'React Patterns: Common Solutions to Common Problems',
      content: 'Understanding and applying design patterns can lead to cleaner and more maintainable React code.',
      date: 'Jul 05, 2023',
    },
    {
      id: 20,
      title: 'React Server Components: A Glimpse into the Future',
      content: 'React Server Components are a new way to build UIs that can seamlessly render on the server and the client.',
      date: 'Aug 20, 2023',
    },
    
  ];
  
 
const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // Filter articles based on the search term
    const filteredResults = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm) ||
      article.content.toLowerCase().includes(searchTerm) ||
      article.date.toLowerCase().includes(searchTerm)
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      

      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <div className='text-lg'><span className='font-bold mt-8'>{searchResults.length} posts</span> were found.</div>
            <div
            className='text-2xl pb-1 font-bold'
             dangerouslySetInnerHTML={{
              __html: result.title.replace(
                new RegExp(`(${searchTerm})`, 'gi'),
                (match) => `<span class="bg-yellow-200">${match}</span>`
              )
            }} />
            
            <div className='pb-4 text-lg'>{result.date}</div>
            <div
            className='text-xl pb-8'
             dangerouslySetInnerHTML={{
              __html: result.content.replace(
                new RegExp(`(${searchTerm})`, 'gi'),
                (match) => `<span class="bg-yellow-200">${match}</span>`
              )
            }} />

          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;

