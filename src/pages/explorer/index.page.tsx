import { GetServerSideProps } from 'next'
import Image from 'next/image'

import { Layout } from 'src/layouts'
import {
  BookCard,
  BookWrapper,
  CategoriesWrapper,
  ExplorerHeader,
  ExplorerInput,
  Wrapper,
} from './styles'

import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { prisma } from 'src/lib/prisma'
import { Tag } from 'src/componentes/Tag'

type Book = {
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: string
}

type Category = {
  id: string
  name: string
}

export interface ExplorerProps {
  books: Book[]
  categories: Category[]
}

function Explorer({ books, categories }: ExplorerProps) {
  return (
    <Wrapper>
      <ExplorerHeader>
        <div>
          <Binoculars />
          <h2>Explorar</h2>
        </div>

        <ExplorerInput>
          <input type="text" placeholder="Buscar livro ou autor" />
          <MagnifyingGlass />
        </ExplorerInput>
      </ExplorerHeader>
      <CategoriesWrapper>
        <Tag selected>Todos</Tag>
        {categories.map((category) => (
          <Tag key={category.id}>{category.name}</Tag>
        ))}
      </CategoriesWrapper>

      <BookWrapper>
        {books.map((book) => (
          <BookCard key={book.id}>
            <Image src={'/' + book.cover_url + '.png'} width={108} height={152} alt="" />
            <div>
              <strong>{book.name}</strong>
              <span>{book.author}</span>
            </div>
          </BookCard>
        ))}
      </BookWrapper>
    </Wrapper>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const categories = await prisma.category.findMany()
  const books = await prisma.book.findMany()

  const formBooks = books.map((book) => ({ ...book, created_at: String(book.created_at) }))

  return {
    props: {
      books: formBooks,
      categories: categories,
    },
  }
}

Explorer.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>

export default Explorer
