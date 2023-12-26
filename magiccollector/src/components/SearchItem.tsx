import { FC } from 'react'

interface SearchItemProps {
  name: string
}

const SearchItem: FC<SearchItemProps> = ({name}) => {
  return <div onClick={() => console.log(name)} className='hover:bg-blue-200 hover:cursor-pointer rounded-sm p-1 '>{name}</div>
}

export default SearchItem