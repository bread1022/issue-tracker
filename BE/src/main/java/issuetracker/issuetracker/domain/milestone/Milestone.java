package issuetracker.issuetracker.domain.milestone;

import issuetracker.issuetracker.domain.issue.Issue;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import nonapi.io.github.classgraph.json.Id;
import org.springframework.data.relational.core.mapping.MappedCollection;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@Table("milestone")
public class Milestone {

    @Id
    private Integer milestoneId;
    private String title;
    private String description;
    private LocalDate datetime;
    @MappedCollection(idColumn = "user_id", keyColumn = "id")
    private List<Issue> issueId;
}
