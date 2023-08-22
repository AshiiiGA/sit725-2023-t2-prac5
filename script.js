// const cardList = [
//     {
//         title: 'cat 1',
//         path: 'images/cat2.jpg',
//         subTitle: 'About Cat 1',
//         description: 'Description of Cat 1 <p> Hi there I am looking for owner please adopt me I am a nice behaving cat, I am very obedient. </p>'
//     },
//     {
//         title: 'cat 2',
//         path: 'images/cat3.jpg',
//         subTitle: 'About Cat 2',
//         description: 'Description of Cat 2 <p> Hi there I am looking for owner please adopt me I am a nice behaving cat and also I will protect you. </p>'
//     },
//     {
//         title: 'cat 3',
//         path: 'images/cat3.avif',
//         subTitle: 'About Cat 3',
//         description: 'Description of Cat 3 <p> Hi there I am looking for owner please adopt me I am a nice behaving cat, I am lot better than other cats. </p>'
//     }
//   ];
  
  
const addCards = (items) => {
  items.forEach(item => {
      let itemToAppend = '<div class="col s4 center-align">'+
              '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.path+'">'+
              '</div><div class="card-content">'+
              '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
              '<div class="card-reveal">'+
              '<span class="card-title grey-text text-darken-4">'+item.subTitle+'<i class="material-icons right">close</i></span>'+
              '<p class="card-text">'+item.description+'</p>'+
              '</div></div></div>';
      $("#card-section").append(itemToAppend)
  });
}

const formSumitted = () => {
  let formData = {};
  formData.title = $('#title').val();
  formData.path = $('#path').val();
  formData.subTitle = $('#subTitle').val();
  formData.description = $('#description').val();

  console.log(formData);
  postCat(formData);
}

function postCat(cat) {
  $.ajax({
      url:'/api/cat',
      type:'POST',
      data:cat,
      success: (result) => {
          if (result.statusCode === 201) {
              alert('cat posted');
          }
      }
  });
}

function getAllCats() {
  $.get('/api/cats',(result)=>{
      if (result.statusCode === 200) {
          addCards(result.data);
      }
  });
}

$(document).ready(function(){
  $('.materialboxed').materialbox();
  $('#formSubmit').click(()=>{
      formSumitted();
  });
  $('.modal').modal();
  getAllCats();
});