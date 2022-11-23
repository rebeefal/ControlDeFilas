package com.queue.serviceImpl;



import com.queue.entity.Branch;
import com.queue.entity.Department;
import com.queue.entity.Queue;
import com.queue.repository.BranchRepository;
import com.queue.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class BranchServiceImplementation implements BranchService {
  @Autowired
  BranchRepository branchRepository;



  @Override
  public Branch getById(int branchId) {

    Branch br = branchRepository.findById(branchId).orElse(null);
    return br;
  }

  public Collection<Branch> findAll() {

    Collection<Branch> bs = branchRepository.findAll();
    return bs;
  }

  @Override
  public boolean save(Branch branch) {
    branchRepository.save(branch);
    return true;
  }

  @Override
  public boolean deleteAll() {
    branchRepository.deleteAll();
    return true;
  }
  @Override
  public boolean deleteById(int id) {
    Branch b=getById(id);
    branchRepository.deleteById(b.getId());
    return true;
  }

}
