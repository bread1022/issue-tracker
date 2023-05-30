package issuetracker.issuetracker.domain.page.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CountInfo {
    private Long labelCount;
    private Long milestoneCount;
    private Long openCount;
    private Long closeCount;
}