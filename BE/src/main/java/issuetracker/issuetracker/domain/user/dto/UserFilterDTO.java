package issuetracker.issuetracker.domain.user.dto;

import lombok.Getter;
import org.springframework.data.annotation.Id;

import javax.validation.constraints.NotNull;

@Getter
public class UserFilterDTO {
    @Id
    @NotNull
    private Long id;
    @NotNull
    private String name;
    private String profileUrl;
}
