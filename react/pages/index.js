        import { useState, useEffect } from 'react';
        import { Container } from './styled'
        import "./styled.js";
        
        import Api from '../service/api.js';
        const api = new Api ();

        export default function App() {
            

        const [ produtos, setProdutos ] = useState([]);
        const [ produto, setProduto ] = useState('');
        const [ categoria, setCategoria ] = useState('');
        const [ precode, setPrecoDe ] = useState('') ;
        const [ precopor, setPrecoPor ] = useState('');
        const [ avaliacao, setAvaliacao] = useState('');
        const [ descproduto, setDescProduto ] = useState('');
        const [ estoque, setEstoque ] = useState('');
        const [ imgproduto, setImgProduto ] = useState('');
        const [ idAlterando, setIdAlterando ] = useState(0);

        
        async function listar() {
            let r = await api.listar();
            setProdutos(r);
        }

        async function inserir(){
            if(idAlterando == 0) {
                let r = await api.inserir(produto, categoria, precode, precopor, avaliacao, descproduto, estoque, imgproduto);

                    if (r.erro)
                    alert(r.erro);
                    else
                    alert('💓 Produto inserido!');
            } else {
                let r = await api.alterar(idAlterando, produto, categoria, precode, precopor, avaliacao, descproduto, estoque, imgproduto);

                    if (r.erro)
                    alert(r.erro)
                    else
                    alert('💓 Produto Alterado!')
            }

            limparCampos();
            listar();
        }

        function limparCampos () {
            setProduto(''),
            setCategoria(''),
            setPrecoDe(''),
            setPrecoPor(''),
            setAvaliacao(''),
            setDescProduto(''),
            setEstoque(''),
            setImgProduto(''),
            setIdAlterando(0);
        }

        async function remover (id) {
            let r = await api.remover(id);
            if (r.erro)
                alert(`${r.erro}`);
            else {
                alert('💓 Produto removido!');
                listar();
            }
        }

        async function editar (item) {
            
            setProduto(item.nm_produto),
            setCategoria(item.ds_categoria),
            setPrecoDe(item.vl_preco_de),
            setPrecoPor(item.vl_preco_por),
            setAvaliacao(item.vl_avaliacao),
            setDescProduto(item.ds_produto),
            setEstoque(item.qtd_estoque),
            setImgProduto(item.img_produto),
            setIdAlterando(item.id_produto);
        }

        useEffect(() => {
            listar();
        }, {})

return (
            <Container>
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
                                <div className="bn-titulo"><img src="../public/assets/images/Rectangle 14.svg"alt=""/><p style="margin-left: 0.5em;">{idAlterando == 0 ? 'Novo Produto' : 'Alterando Produto' + idAlterando}</p></div>
                                <form>
                                    <div className="lado-lado">
                                        <div className="direita">   
                                            <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nome:&nbsp;<input type="text" value={produto} onChange={e => setProduto(e.target.value)}/></div>
                                            <div>Categoria:&nbsp;<input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/></div>
                                            <div>Avaliação:&nbsp;<input type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/></div>
                                        </div>
                                        <div className="esquerdo">
                                            <div>Preço DE:&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" value={precode} onChange={e => setPrecoDe(e.target.value)}/></div>
                                            <div>Preço POR:&nbsp;&nbsp;<input type="text" value={precopor} onChange={e => setPrecoPor(e.target.value)}/></div>
                                            <div>Estoque:&nbsp;&nbsp;<input type="text" value={estoque} onChange={e => setEstoque(e.target.value)}/></div>
                                        </div>
                                    </div>
                                    <div className="baixo">
                                        <div>Link Imagem:<input type="text"/></div>
                                    </div>
                                    <div style="font-weight: 700; color: #615858;" >Descrição:<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<textarea style="border: 1px solid rgb(43, 43, 43);border-radius: 5px;" value={descproduto} onChange={e => setDescProduto(e.target.value)}></textarea><button style="background-color: #119FDC; border:none; padding: 0.8em;margin-left: 1em;border-radius: 20px;color:white;font-weight: 700;" onClick={inserir}> {idAlterando == 0 ? 'Cadastrar' : 'Alterar'}</button></div>
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
                                      {produtos.map((item, i) =>
                                        <tr className={ i % 2 == 0 ? "linha-alternada" : ""}>
                                            <td>imagem</td>
                                            <td>{item.id_produto}</td>
                                            <td title={item.nm_produto}>{item.nm_produto != null && item.nm_produto.length >= 20
                                                    ?   item.nm_produto.substr(0,25) + '...'
                                                    :   item.nm_produto}
                                            </td>
                                            <td>{item.ds_categoria}</td>
                                            <td>{item.vl_preco_por}</td>
                                            <td>{item.qtd_estoque}</td>

                                            <td><button style="border-radius: 50%;border: none;box-shadow: none;padding: 0.5em 0.8em;background-color: #565656;" onClick={() => editar(item) }><img src="../public/assets/images/editar.svg"alt=""/></button></td>
                                            <td><button style="border-radius: 50%;border: none;box-shadow: none;padding: 0.5em 0.8em;background-color: #565656;" onClick={() => remover(item.id_produto) }><img src="../public/assets/images/lixo.svg"alt=""/></button></td>
                                        </tr>
                                      )}  

                                    </tbody>
                                </table>
                            </div>
                    </div>
                </div>
            </Container>

    )
}