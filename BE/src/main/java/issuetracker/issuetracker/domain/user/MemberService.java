package issuetracker.issuetracker.domain.user;

import issuetracker.issuetracker.domain.issue.Assignee;
import issuetracker.issuetracker.domain.user.dto.AssigneeDTO;
import issuetracker.issuetracker.domain.user.dto.AuthorDTO;
import lombok.AllArgsConstructor;
import org.springframework.data.jdbc.core.mapping.AggregateReference;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;
import java.util.Set;

@Service
@AllArgsConstructor
public class MemberService {

    final private MemberRepository userRepository;

    public AuthorDTO findByAuthor(AggregateReference<Member, @NotNull Long> userId) {
        return userRepository.findByAuthorDTO(userId.getId());
    }
}
