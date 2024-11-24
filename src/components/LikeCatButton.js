
function LikeCatButton({likes, onLike}) {

  return (
    <button type="button"
      className="btn btn-primary"
      onClick={onLike}
    >
      ❤️ Like {likes}
    </button>
  );

}

export default LikeCatButton;