import React from 'react';

interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  }
}

const RepositoryItem = (props: RepositoryItemProps) => (
  <li>
    <strong>{props.repository?.name}</strong>
    <p>{props.repository?.description}</p>

    <a href={props.repository.html_url} target="_blank" rel="noreferrer">
      Acessar repositório no Github
    </a>
  </li>
);
export default RepositoryItem;
