
        <head>
            <title>DevStore</title>

            <link rel="shortcut icon" type="imagex/png" href="../public/assets/images/Vector_2_.ico"alt=""/>
        </head>

        import "../pages/styled.css"
        

    <body>
        <div className="conteiner">
            <div className="barra-lateral">
                <div className="logo"><img src="../public/assets/images/logo.svg" alt=""/><div className="azul">Dev</div>Store</div>
                <div style="height: 5vh"></div>
                <div className="gerenciamento">
                    Gerenciamento <img src="../public/assets/images/Vectorssdsadsa.svg" alt=""/>
                </div>
                <div className="produtos">
                    <img src="../public/assets/images/Rectangle 14.svg"alt=""/><p>Produtos</p>
                </div>
            </div> 
            <div className="tela-principal">   
                    <div className="cabecalho">
                        <div className="usuario"><img src="../public/assets/images/usuario.svg"alt=""/>&nbsp;&nbsp;Olá, Bruno de Oliveira</div>
                        <div className="botoes-cab">
                            <button><img src="../public/assets/images/refresh.svg"alt=""/></button>
                        </div>
                        <div className="botoes-cab">
                            <button>&nbsp;<img src="../public/assets/images/log-out.svg"alt=""/></button>
                        </div>
                    </div>

                        <div className="novo-produto">
                            <div className="bn-titulo"><img src="../public/assets/images/Rectangle 14.svg"alt=""/><p style="margin-left: 0.5em;">Novo Produto</p></div>
                            <form>
                                <div className="lado-lado">
                                    <div className="direita">   
                                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nome:&nbsp;<input type="text"/></div>
                                        <div>Categoria:&nbsp;<input type="text"/></div>
                                        <div>Avaliação:&nbsp;<input /></div>
                                    </div>
                                    <div className="esquerdo">
                                        <div>Preço DE:&nbsp;&nbsp;&nbsp;&nbsp;<input /></div>
                                        <div>Preço POR:&nbsp;&nbsp;<input /></div>
                                        <div>Estoque:&nbsp;&nbsp;<input /></div>
                                    </div>
                                </div>
                                <div className="baixo">
                                    <div>Link Imagem:<input /></div>
                                </div>
                                <div style="font-weight: 700; color: #615858;" >Descrição:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea style="border: 1px solid rgb(43, 43, 43);border-radius: 5px;"></textarea><button style="background-color: #119FDC; border:none; padding: 0.8em;margin-left: 1em;border-radius: 20px;color:white;font-weight: 700;">Cadastrar</button></div>
                            </form>
                        </div>
                        <div className="produto-cadastrado">
                            <div className="bc-titulo"><img src="../public/assets/images/Rectangle 14.svg"alt=""/><p>Produtos Cadastrados</p></div>
                            <table className="tabela">
                                <thead>
                                        <th></th>
                                        <th>ID</th>
                                        <th>Produto</th>
                                        <th>Categoria</th>
                                        <th>Preço</th>
                                        <th>Estoque</th>
                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>imagem</td>
                                        <td>1</td>
                                        <td>Café</td>
                                        <td>Alimentos</td>
                                        <td>7.15</td>
                                        <td>150</td>

                                        <td><button style="border-radius: 50%;border: none;box-shadow: none;padding: 0.5em 0.8em;background-color: #565656;"><img src="../public/assets/images/editar.svg"alt=""/></button></td>
                                        <td><button style="border-radius: 50%;border: none;box-shadow: none;padding: 0.5em 0.8em;background-color: #565656;"><img src="../public/assets/images/lixo.svg"alt=""/></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
            </div>
    </body>
