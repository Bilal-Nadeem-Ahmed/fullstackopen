const dummy =(blogs)=>{
    return 1
}

const totalLikes = (list)=>{
let likes = 0
list.forEach(blogItem=> likes+= blogItem.likes)   
return likes 
}


module.exports={dummy,totalLikes}