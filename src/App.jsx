import {Header} from './components/Header'
import {Post} from './components/Post'
import styles from './App.module.css'
import'./global.css'
import { Sidebar } from './components/Sidebar'
export function App() {  

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/leonardodelira.png',
        name: 'Leonardo Lira',
        role: 'Software Enginner 1'
      },
      content: [
        {type: 'p', content: 'Fala pessoal 👋'},
        {type: 'p', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻        Acesse e deixe seu feedback 👉 '},
        {type: 'link', content: 'jane.design/doctorcare2'}
      ],
      publishedAt: new Date(Date.now())
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/lirajw.png',
        name: 'Lucas Lira',
        role: 'Software Enginner 1'
      },
      content: [
        {type: 'p', content: 'Bom dia Galera 👋'},
        {type: 'p', content: 'Aliais, Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻        Acesse e deixe seu feedback 👉 '},
        {type: 'link', content: 'jane.design/doctorcare'}
      ],
      publishedAt: new Date(Date.now())
    }
  ];

  return (    
      <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map( post => {
            return (
              <Post 
                key={post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
             )
          })}
                  
        </main>
      </div>
      
      </>
  )
}

