import { rest } from 'msw';

import assigneeFilter from './assigneeFilterData.json';
import authorFilter from './authFilterData.json';
import closeFilter from './closeFilterData.json';
import commentData from './commentData.json';
import commentFilter from './commentFilterData.json';
import detailData from './issueDetailData.json';
import labelData from './labelData.json';
import labelFilter from './labelsFilterData.json';
import milestoneData from './milestoneData.json';
import milestonFilter from './milestonFilterData.json';
import issueData from './mockIssueData.json';
import openFilter from './openFilterData.json';
import userData from './userData.json';

export const handlers = [
  rest.get('/issues', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(issueData));
  }),

  rest.get('/labels', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(labelData));
  }),

  rest.get('/milestone', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(milestoneData));
  }),

  rest.get('/user', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(userData));
  }),

  rest.get('/issueDetail', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(detailData));
  }),
  rest.get('/issueDetail/comment', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(commentData));
  }),
  rest.get('/issues/isOpen=true', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(openFilter));
  }),
  rest.get('/issues/isOpen=false', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(closeFilter));
  }),
  rest.get('/issues/id:1/author', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(authorFilter));
  }),
  rest.get('/issues/id:1/assignee', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(assigneeFilter));
  }),
  rest.get('/issues/id:3/milestone', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(milestonFilter));
  }),
  rest.get('/issues/id:1/comment', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(commentFilter));
  }),
  rest.get('/issues/id:2/label', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(labelFilter));
  })
];
