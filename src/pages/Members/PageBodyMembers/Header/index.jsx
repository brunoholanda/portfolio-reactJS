import React, { useState } from 'react';
import * as S from './Styles';
import logo from '../../../../public/assets/img/dev-master.png'; // Ajuste o caminho para a logo

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleUserClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <S.Header>
      <S.Logo src={logo} alt="Dev Samurai Logo" />
      <S.Support href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
        Suporte
      </S.Support>
      <S.UserInfo onClick={handleUserClick}>
        Bruno Holanda
        {dropdownOpen && (
          <S.Dropdown>
            <S.DropdownItem>Sair</S.DropdownItem>
            <S.DropdownItem>Alterar Senha</S.DropdownItem>
          </S.Dropdown>
        )}
      </S.UserInfo>
    </S.Header>
  );
}
