package issuetracker.issuetracker.domain.issue.dto.Request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class IssueTitleDTO {
    private String title;
}
