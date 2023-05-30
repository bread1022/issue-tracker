package issuetracker.issuetracker.domain.issue;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class IssueFilterCondition {
    private List<Long> assignees;
    private List<Long> labels;
    private Long milestone;
    private Long author;
    private Boolean isOpen;
    private Boolean isWrittenByMe;
    private Boolean isAssignedToMe;
    private Boolean commentedByMe;

    public int getLabelsSize() {
        return (labels != null) ? labels.size() : 0;
    }

    public int getAssigneesSize() {
        return (assignees != null) ? assignees.size() : 0;
    }

}
