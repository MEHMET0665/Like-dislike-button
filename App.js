import React,{ Component,useState  } from 'react';


function LikeDislike (){
  const [like, setLike] = useState(10);
  const [dislike, setDislike] = useState(120);
  const [likeToggle, setLikeToggle] = useState(false);
  const [dislikeToggle, setDislikeToggle] = useState(false);
  
  

   const handleSubmitLike=()=>{
if (likeToggle){
  
  setLikeToggle(false)
  setLike(like-1)
  setDislike(dislike+1)
} else{setLikeToggle(true)
  setDislikeToggle(false)
  setLike(like+1)
  setDislike(dislike-1)}
  console.log(likeToggle)
  }
  const handleSubmitDisike=()=>{
    if (dislikeToggle){
      
  setDislikeToggle(false)
  setLike(like+1)
  setDislike(dislike-1)
} else{setDislikeToggle(true)
  setLikeToggle(false)
  setLike(like-1)
  setDislike(dislike+1)}
  console.log(dislikeToggle)
      }
  
    
        return (
            <>
                <div>
                    <button className= {likeToggle?"liked like-button":"like-button" } onClick={handleSubmitLike}>Like{like}</button>
                     <button className= {dislikeToggle?"liked like-button":"like-button " }  onClick={handleSubmitDisike}>Dislike{dislike}</button>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
                  }
                  export default LikeDislike;