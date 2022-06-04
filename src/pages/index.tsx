import type { NextPage } from 'next'
import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';

const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
        titulo=""
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }  />    

        <Lista 
          pets={[
            {
              id: 1,
              nome: 'Bidu',
              historia: 'icnc  oiefnwoi faowinfeo if aoiwf  iiofejoi   foij  iojfojfawfjwaopei',
              foto: 'https://www.fazfacil.com.br/wp-content/uploads/2013/03/puppy.jpg'
            },
            {
              id: 2,
              nome: 'Coadu',
              historia: 'fao oij foaij oi fiomn oinao  iomag o',
              foto: 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/o-que-fazer-para-o-cachorro-parar-de-lamber-final-1280x720.jpg'
            },
          ]}
        />
    </div>
  )
}


export default Home
