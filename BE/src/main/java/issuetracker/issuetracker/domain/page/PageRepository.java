package issuetracker.issuetracker.domain.page;

import issuetracker.issuetracker.domain.issue.Issue;
import issuetracker.issuetracker.domain.page.dto.CountInfo;
import issuetracker.issuetracker.domain.page.mapper.CountRowMapper;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;

public interface PageRepository extends CrudRepository<Issue, Long> {

    Iterable<Issue> findAll();


    @Query(value = "select " +
            "(select count(issue_id) from issue where is_open=0) as close_count, " +
            "(select count(issue_id) from issue where is_open=1) as open_count, " +
            "(select count(label_id) from label) as label_count, " +
            "(select count(milestone_id) from milestone) as milestone_count",
            rowMapperClass = CountRowMapper.class)
    CountInfo countCountInfo();
}