import { queryHelper } from '@/libs/QueryHelper';

export default async function UserById({ params } : { params: { id: string } }) {

    const { id } = await params;

    const query = `SELECT * FROM public."User" where id=${id}`;

    const users = await queryHelper(query);
    
    console.log(users);
    
  return (
    <div>UserById</div>
  )
}
