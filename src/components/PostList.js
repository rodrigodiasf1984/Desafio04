import React, { Component } from 'react';
import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Rodrigo Dias De Figueiredo',
          avatar: 'https://avatars2.githubusercontent.com/u/30758309?s=60&v=4'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '04 Jun 2019',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Marcello Icaro Lima',
          avatar: 'https://avatars3.githubusercontent.com/u/2079192?s=64&v=4'
        },
        date: '04 Jun 2019',
        content:'Fala galera, beleza?\nEstou fazendo o Bootcamp GoStack e está sendo muito massa! Alguém mais aí fazendo? Comenta aí na publicação para trocarmos uma idéia',
        comments: [
          {
            id: 4,
            author: {
              name: 'Flávio Pangrácio',
              avatar: 'https://avatars2.githubusercontent.com/u/29132783?s=60&v=4'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp e estou adorando! Já estou fazendo a parte do Redux! As duas primeiras partes do desafio final já estão prontas!'
          },
          {
            id: 5,
            author: {
              name: 'Jonathan M. Borges',
              avatar: 'https://avatars2.githubusercontent.com/u/912571?s=460&v=4'
            },
            date: '04 Jun 2019',
            content:
              'Também estou fazendo o Bootcamp! Já estou fazendo a parte do React-Native!'
          },
          {
            id: 2,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4'
            },
            date: '04 Jun 2019',
            content:
              'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          },          
        ]
      },

    ]
  };
  
  render() {    
    return (
      <div className="postlist">
        {this.state.posts.map(post => (
         <PostItem key={post.id} data={post}/>//...posts == spread copia tudo que tem dentro do posts[] array
        ))}
      </div>
    );
  }
}

export default PostList;