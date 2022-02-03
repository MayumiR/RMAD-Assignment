function Detail(props) {
  return (
    <div>
      <div class="card">
        <div class="card-header">{props.note.title}</div>
        <div class="card-body">
          <h5 class="card-title">{props.note.date}</h5>
          <p class="card-text">{props.note.note}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
