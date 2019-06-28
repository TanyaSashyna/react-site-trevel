import * as types from "../actionTypes/actionTypes";

const initialState = {
  galleryPhoto: [
    {
      img: 'https://cdn.pixabay.com/photo/2017/08/05/12/47/auto-2583303_960_720.jpg',
      alt: 'bus1',
      id: 1
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/08/05/12/36/auto-2583230_960_720.jpg',
      alt: 'bus2',
      id: 2
    },
    {
      img: 'https://cdn.pixabay.com/photo/2016/03/27/20/00/car-1284040_960_720.jpg',
      alt: 'bus3',
      id: 3
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/08/05/12/45/auto-2583292_960_720.jpg',
      alt: 'bus4',
      id: 4
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/08/05/12/46/auto-2583297_960_720.jpg',
      alt: 'bus5',
      id: 5
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/08/05/12/42/auto-2583266_960_720.jpg',
      alt: 'bus6',
      id: 6
    }
  ]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_GALLERY_PHOTO: {
            return ...state
        }
        default:
            return state;
    }
}
