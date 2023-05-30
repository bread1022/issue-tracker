package issuetracker.issuetracker.domain.milestone.dto;

import lombok.*;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@Builder
@NoArgsConstructor
public class MileStoneDTO {
    @Id
    @NotNull
    private Long id;
    private String title;
}
