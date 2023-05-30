package issuetracker.issuetracker.domain.issue.repository;

import issuetracker.issuetracker.domain.issue.IssueFilterCondition;
import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface IssueMybatisRepository {
    List<IssueDTO> findIssueFilter(IssueFilterCondition issueFilterCondition);
}
