// eslint-disable-next-line no-unused-vars
const dummy =(blogs) => {
  return 1
}

const totalLikes = (list) => {
  let likes = 0
  list.forEach(blogItem => likes+= blogItem.likes)
  return likes
}

const favouriteBlog =(list) => {

  if(list.length>0){
    const likesArray = list.map((listItem) => listItem.likes)
    const indexOfHighestLikes = likesArray.indexOf(Math.max(...likesArray))

    return {
      title: list[indexOfHighestLikes].title,
      author: list[indexOfHighestLikes].author,
      likes: list[indexOfHighestLikes].likes
    }
  } else{
    return 'you have failed to pass through the bloglist correctly'
  }



}


module.exports={ dummy,totalLikes,favouriteBlog }