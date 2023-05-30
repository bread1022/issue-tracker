package issuetracker.issuetracker.domain.issue;

import issuetracker.issuetracker.domain.user.Member;
import lombok.AllArgsConstructor;
import lombok.Value;
import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import javax.validation.constraints.NotNull;

@Value
@AllArgsConstructor
@Table("assignee")
public class Assignee {
    @Id
    @Column("assignee_id")
    private Long id;

    AggregateReference<Member, @NotNull Long> memberId;
}
