export const getFilterQueryString = ({
  isOpen,
  author,
  labels, // 중복가능
  milestone,
  assignees, // 중복가능
  comments,
  isWrittenByMe,
  isAssignedToMe,
  commentedByMe
}) => {
  return [
    `isOpen=${isOpen}`,
    author && `&author=${author}`,
    labels?.size ? `&labels=${[...labels].join(',')}` : null,
    milestone && `&milestone=${milestone}`,
    assignees?.size ? `&assignees=${[...assignees].join(',')}` : null,
    comments && `&comments=${comments}`,
    isWrittenByMe && `&isWrittenByMe=${isWrittenByMe}`,
    isAssignedToMe && `&isAssignedToMe=${isAssignedToMe}`,
    commentedByMe && `&commentedByMe=${commentedByMe}`
  ].join('');
};

export const convertFilterQueryToInputValue = ({
  isOpen,
  author,
  labels,
  milestone,
  assignees,
  comments,
  isWrittenByMe,
  isAssignedToMe,
  commentedByMe
}) => {
  return [
    `is:${isOpen ? 'open' : 'close'} is:issue`,
    author && `author:${author.id}`,
    labels?.size ? `&labels=${[...labels].join(',')}` : null,
    milestone && `milestone:${milestone.id}`,
    assignees?.size ? `&assignees=${[...assignees].join(',')}` : null,
    comments && `comments:${comments.id}`,
    isWrittenByMe && `isWrittenByMe=@me`,
    isAssignedToMe && `isAssignedToMe=@me`,
    commentedByMe && `commentedByMe=@me`
  ]
    .filter((query) => query)
    .join(' ');
};
