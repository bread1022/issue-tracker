package issuetracker.issuetracker.domain.label.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
public class LabelFilterDTO {

    @NotNull
    private Long id;
    @NotNull
    private String title;
    @NotNull
    private String backgroundColor;
}
