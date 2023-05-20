package issuetracker.issuetracker.domain.label.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
public class LabelListDTO {

    @NotNull
    private Long id;
    @NotNull
    private String title;
    private String contents;
    @NotNull
    private String backgroundColor;
}
