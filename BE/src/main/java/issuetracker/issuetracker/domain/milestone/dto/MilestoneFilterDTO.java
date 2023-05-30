package issuetracker.issuetracker.domain.milestone.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
public class MilestoneFilterDTO {
    @NotNull
    private Long id;
    @NotNull
    private String title;
}
