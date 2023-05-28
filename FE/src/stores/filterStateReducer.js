export const initialFilterState = {
  isOpen: true,
  author: null, // 작성자
  milestone: null, // 마일스톤
  labels: new Set(), // 레이블 중복가능
  assignees: new Set(), // 담당자 중복가능
  comments: null // 댓글
};

// 리듀서는 순수함수
export const filterStateReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'RESET-FILTER': {
      return initialFilterState;
    }
    // TODO:  두번씩 디스패치 되서 중복처리가 안됨 (어디서 중복되는지 확인 후 처리 하기)
    case 'FILTER-ISSUES': {
      const { filterState, id } = payload;
      // 이미 존재하면 제거하고, id 가 none 인 경우에도 제거해야됨
      if (filterState in state) {
        if (filterState === 'labels' || filterState === 'assignees') {
          return {
            ...state,
            [filterState]: state[filterState].add(id)
          };
        } else {
          return {
            ...state,
            [filterState]: id
          };
        }
      } else {
        return convertFilterOption(state, filterState, id);
      }
    }
    default:
      return state;
  }
};

const convertFilterOption = (state, filterState, id) => {
  if (filterState !== 'filter') return;
  switch (id) {
    case 'isOpen': {
      return {
        ...state,
        isOpen: id === 'isOpen'
      };
    }
    case '!isOpen': {
      return {
        ...state,
        isOpen: id === 'isOpen'
      };
    }
    // case 'isWrittenByMe': {
    //   return {
    //     ...state,
    //     author: 'userId' // 유저 id를 넘겨줘야됨
    //   };
    // }
    default:
      return state;
  }
};
