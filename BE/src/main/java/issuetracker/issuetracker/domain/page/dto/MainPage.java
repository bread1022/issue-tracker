package issuetracker.issuetracker.domain.page.dto;

import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
public class MainPage {
    private List<IssueDTO> issueList;
    private CountInfo countInfo;
}
