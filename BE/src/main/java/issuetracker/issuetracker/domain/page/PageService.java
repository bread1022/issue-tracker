package issuetracker.issuetracker.domain.page;

import issuetracker.issuetracker.domain.issue.dto.IssueDTO;
//import issuetracker.issuetracker.domain.issue.repository.IssueRepositoryJDBCtem;
import issuetracker.issuetracker.domain.page.dto.CountInfo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class PageService {

    private final PageRepository repository;
//    private final IssueRepositoryJDBCtem issueRepository;
//
//    public List<IssueDTO> getMainPage() {
//
//        // issueList 조회
//        return issueRepository.findAll();
//    }

    public CountInfo getCountInfo() {

        return repository.countCountInfo();
    }
}