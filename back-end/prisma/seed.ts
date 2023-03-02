import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {

  await prisma.place.create({
    data: {
      name: 'Cristo Redentor',
      district: 'RJ',
      image: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/03/cristo-redentor-como-visitar-precos-rio-de-janeiro-capa.jpg',
      image2: 'https://observatorio3setor.org.br/wp-content/uploads/2022/11/AdobeStock_89029019-scaled-e1669668425566.jpeg',
      image3: 'https://cdn.limber.net.br/img/bilhetes/3073/3073-CFwXwozTS6.jpeg',
      image4: 'https://cariocadagema.tur.br/wp-content/uploads/2021/03/novo-cristo-redentor-corcovado-paineiras.jpg',
      description: 'Cristo Redentor é uma estátua art déco que retrata Jesus Cristo, localizada no topo do morro do Corcovado, a 709 metros acima do nível do mar, com vista para parte considerável da cidade brasileira do Rio de Janeiro. Feito de concreto armado e pedra-sabão, tem trinta metros de altura (uma das maiores estátuas do mundo), sem contar os oito metros do pedestal. Seus braços se esticam por 28 metros de largura e a estrutura pesa 1145 toneladas. O monumento é parte de um santuário católico e a Arquidiocese do Rio de Janeiro administra a estátua e o platô do mirante, além de também ser responsável pela manutenção e pelas celebrações na área. O direito de gerenciar o local foi concedido pela União à Arquidiocese do Rio na década de 1930, mas o acesso à estátua é realizado através do Parque Nacional da Tijuca, que é administrado pelo Instituto Chico Mendes de Conservação da Biodiversidade (ICMBio). A ideia de construir uma grande estátua no alto do Corcovado foi sugerida pela primeira vez em meados do século XIX, mas foi o Círculo Católico do Rio de Janeiro que conseguiu as doações necessárias para colocar a ideia em prática no início do século XX. O monumento foi construído na França a partir de 1922 através de uma colaboração entre os brasileiros Heitor da Silva Costa e Carlos Oswald, os franceses Paul Landowski e Albert Caquot e o romeno Gheorghe Leonida. Sua inauguração ocorreu no dia 12 de outubro de 1931, dia de Nossa Senhora Aparecida. Símbolo do cristianismo, o Cristo Redentor também se tornou um ícone cultural do Rio de Janeiro, do Brasil e da América Latina como um todo, sendo retratado no cinema, na televisão e em músicas. O monumento é um importante ponto turístico, que recebe, em média, 2 milhões de visitantes por ano. Em 2007, foi eleito informalmente como uma das sete maravilhas do mundo moderno e, em 2012, a UNESCO considerou o Cristo Redentor como parte da paisagem do Rio de Janeiro incluída na lista de Patrimônios da Humanidade.',
      city: 'Rio de Janeiro, Rio de Janeiro',
      googleMapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9542746056463!2d-43.21267588488418!3d-22.95191104525333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd5984aa13f%3A0x9dc984d7019502de!2sCristo%20Redentor!5e0!3m2!1spt-BR!2sbr!4v1675495024540!5m2!1spt-BR!2sbr',
      isPaid: true,
      hasFood: true,
      hasCellular: true,
      hasWc: true,
      hasGuidance: true,
      isTrekking: false,
      needId: true,
      car: true,
      airplane: true,
      boat: false
    },
  });

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
