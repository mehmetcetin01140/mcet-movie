import React from 'react';
import { useRouter } from 'next/router'
const Id = ({user}) => {
    const router = useRouter()
  const { id } = router.query

  return <p>User: {id} {user.name}</p>
}

export default Id;
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
  
    const paths = users.map((user) => ({
      params: { id: user.id.toString() },
    }))
  
    return { paths, fallback: false }
  }
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
  
    return { props: { user } }
  }