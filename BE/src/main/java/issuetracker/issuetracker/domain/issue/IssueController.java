package issuetracker.issuetracker.domain.issue;


import io.swagger.v3.oas.annotations.tags.Tag;
import issuetracker.issuetracker.domain.issue.comment.dto.CommentInIssueDTO;
import issuetracker.issuetracker.domain.issue.comment.dto.CommentPostDTO;
import issuetracker.issuetracker.domain.issue.dto.IssueDetailDTO;
import issuetracker.issuetracker.domain.issue.dto.Request.IssueTitleDTO;
import issuetracker.issuetracker.domain.issue.dto.Request.PostingIssueDTO;
import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
import issuetracker.issuetracker.domain.issue.repository.IssueMybatisRepository;
import issuetracker.issuetracker.domain.issue.service.IssueService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Tag(name = "posts", description = "issue 메인 API")
@RestController
@RequiredArgsConstructor
@RequestMapping("/issues")
public class IssueController {

    private final IssueMybatisRepository repository;
    private final IssueService issueService;
    private final Logger log = LoggerFactory.getLogger(IssueController.class);

    @GetMapping
    public List<IssueDTO> getAllIssues(@ModelAttribute IssueFilterCondition issueFilterCondition) {
        log.debug("모든 이슈 출력  필터링 적용");
        return repository.findIssueFilter(issueFilterCondition);
    }

    @PostMapping
    public Long postIssue(@RequestBody PostingIssueDTO issue) {
        // 저장하는 로직 추가
        log.debug("이슈저장");
        return issueService.save(issue);
    }

    @GetMapping("/{issueId}")
    public IssueDetailDTO explainIssue(@PathVariable Long issueId) {
        // findByIssue
        log.debug("이슈 하나 조회");
        return issueService.findByIssueDetailPage(issueId);
    }

    @PatchMapping("/{issueId}/title")
    public void updateTitle(@PathVariable Long issueId, @RequestBody IssueTitleDTO issueTitleDTO) {
        // 수정하는 메서드 생성
        log.debug("이슈 제목 편집");
        issueService.updateIssueTitle(issueId, issueTitleDTO);
    }

    @PatchMapping("/{issueId}/labels")
    public void updateLabels(@PathVariable Long issueId, @RequestBody PostingIssueDTO issue) {
        // 수정하는 메서드 생성
        log.debug("이슈 레이블 편집");
    }

    @PatchMapping("/{issueId}/comments")
    public void updateCommnet(@PathVariable Long issueId, @RequestBody PostingIssueDTO issue) {
        // 수정하는 메서드 생성
        log.debug("이슈 코멘트 편집");
    }

    @PatchMapping("/{issueId}/assignees")
    public void updateAssignees(@PathVariable Long issueId, @RequestBody PostingIssueDTO issue) {
        // 수정하는 메서드 생성
        log.debug("이슈 담당자 편집");
    }

    @DeleteMapping()
    public void deleteIssue(@PathVariable Long issueId) {
        log.debug("이슈의 삭제");
        issueService.deleteIssue(issueId);
    }

    @GetMapping("/{issueId}/comments")
    public List<CommentInIssueDTO> showComment(@RequestParam Long issueId) {
        // TODO 댓글 리스트 구현
        return new ArrayList<>();
    }

    @PostMapping("/{issueId}/comments")
    public void postComment(@RequestBody CommentPostDTO comment) {
        // TODO 댓글 작성하기 구현

    }

    @PutMapping("/{issueId}/comments/{commentId}")
    public void updateComment(@RequestParam Long issueId, @RequestParam Long commentId, @RequestBody CommentPostDTO comment) {
        // TODO 댓글 수정하기 구현
    }

    @DeleteMapping("/{issueId}/comments/{commentId}")
    public void deleteComment(@RequestParam Long issueId, @RequestParam Long commentId) {
        // TODO 댓글 삭제하기 구현
    }
}
