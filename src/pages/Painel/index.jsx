import React, { useState, useEffect } from 'react';
import './Painel.css';
import { BASE_URL } from 'config';
import ModalAdd from 'components/Modals/modalAdd';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
const OperatorPanel = ({ addPost, editPost, editedPost, setEditedPost, cancelEdit }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [project_link, setProject_link] = useState('');
  const [repo_link, setRepo_link] = useState('');
  const [isFormIncomplete, setIsFormIncomplete] = useState(false);

  useEffect(() => {
    if (editedPost) {
      setTitle(editedPost.title);
      setImage(editedPost.image);
      setSummary(editedPost.summary);
      setDescription(editedPost.description);
      setSkills(editedPost.skills);
      setProject_link(editedPost.project_link);
      setRepo_link(editedPost.repo_link);
    }
  }, [editedPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !summary || !description || !skills || !project_link || !repo_link) {
      setIsFormIncomplete(true);
      setTimeout(() => setIsFormIncomplete(false), 5000);
      return;
    }

    const postData = {
      title,
      image,
      summary,
      description,
      skills,
      project_link,
      repo_link,
    };

    try {
      const token = localStorage.getItem('authToken');
      const headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', `Bearer ${token}`);

      if (editedPost) {
        await editPost(editedPost.id, postData, headers);
      } else {
        await addPost(postData, headers);
      }
      clearForm();
    } catch (error) {
      console.error('Erro ao enviar o post:', error);
      alert('Erro ao enviar o post');
    }
  };

  const clearForm = () => {
    setTitle('');
    setImage('');
    setSummary('');
    setDescription('');
    setSkills('');
    setProject_link('');
    setRepo_link('');
    setEditedPost(null);
  };

  return (
    <div className='formulario'>
      <h2>Insira os dados do seu projeto!</h2>
      {isFormIncomplete && <p className="error">Por favor, preencha todos os campos!</p>}

      <form className='painel' onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="title"
            className={title === '' ? 'required-field' : ''}
            placeholder='Insira o Título do Projeto'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="image"
            className={image === '' ? 'required-field' : ''}
            placeholder='URL da Imagem'
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <textarea
            id="summary"
            className={summary === '' ? 'required-field' : ''}
            placeholder='Resumo do projeto'
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
        <div>
          <textarea
            id="description"
            className={description === '' ? 'required-field' : ''}
            placeholder='Descrição completa do projeto'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="skills"
            className={skills === '' ? 'required-field' : ''}
            placeholder='Habilidades'
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="projectLink"
            className={project_link === '' ? 'required-field' : ''}
            placeholder='Link do Projeto'
            value={project_link}
            onChange={(e) => setProject_link(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="repoLink"
            className={repo_link === '' ? 'required-field' : ''}
            placeholder='Link do GitHub'
            value={repo_link}
            onChange={(e) => setRepo_link(e.target.value)}
          />
        </div>
        {editedPost ? (
          <>
            <button type="submit">Salvar</button>
            <button type="button" onClick={cancelEdit}>Cancelar</button>
          </>
        ) : (
          <button type="submit">Adicionar Post</button>
        )}
      </form>
    </div>
  );
};

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [editedPost, setEditedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = async (postData, headers) => {
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers,
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar o post');
      }

      const newPost = await response.json();
      setPosts([...posts, newPost]);
    } catch (error) {
      console.error('Erro ao adicionar o post:', error);
      alert('Erro ao adicionar o post');
    }
  };

  const editPost = async (postId, postData, headers) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'PUT',
        headers,
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Erro ao editar o post');
      }

      const updatedPost = await response.json();
      setPosts(posts.map((p) => (p.id === updatedPost.id ? updatedPost : p)));
      setEditedPost(null);
    } catch (error) {
      console.error('Erro ao editar o post:', error);
      alert('Erro ao editar o post');
    }
  };

  const deletePost = async (postId) => {
    try {
      const token = localStorage.getItem('authToken');
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);

      const response = await fetch(`${BASE_URL}/posts/${postId}`, {
        method: 'DELETE',
        headers,
      });

      if (!response.ok) {
        throw new Error('Erro ao excluir o post');
      }

      setPosts(posts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error('Erro ao excluir o post:', error);
      alert('Erro ao excluir o post');
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${BASE_URL}/posts`);
        if (!response.ok) {
          throw new Error('Erro ao obter os posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Erro ao obter os posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className='page'>
        <h1>Painel do Operador</h1>
        <p>Aqui é possível adicionar, remover ou alterar projetos</p>
        <button onClick={handleOpenModal}>Adicionar Post</button>
      </div>
      <ModalAdd isOpen={isModalOpen} close={handleCloseModal}>
        <OperatorPanel
          addPost={addPost}
          editPost={editPost}
          editedPost={editedPost}
          setEditedPost={setEditedPost}
        />
      </ModalAdd>
      {posts.map((post, index) => (
        <div key={index} className='postagem'>
          <h2><strong>Título:</strong> {post.title}</h2>
          <img src={post.image} alt={post.title} />
          <p><strong>Resumo:</strong> {post.summary}</p>
          <strong>Postagem Completa</strong>
          <ReactMarkdown>{post.description}</ReactMarkdown>
          <p><strong>Habilidades:</strong> {post.skills}</p>
          <a href={post.project_link} target="_blank" rel="noreferrer noopener">Link do Projeto</a>
          <a href={post.repo_link} target="_blank" rel="noreferrer noopener">Link do Repositório</a>
          <div className='postagemBotoes'>
            <button onClick={() => { setEditedPost(post); handleOpenModal(); }}>Editar</button>
            <button onClick={() => deletePost(post.id)}>Excluir</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
