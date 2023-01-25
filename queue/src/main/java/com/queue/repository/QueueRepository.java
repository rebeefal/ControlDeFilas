package com.queue.repository;
import com.queue.entity.Queue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Collection;


@Repository
public interface QueueRepository extends JpaRepository<Queue, Integer> {
    
    @Query("SELECT d FROM Queue d WHERE d.branchDepartmentId=:branchDepartmentId")
    Collection<Queue> findQueuesByBd_Id(String branchDepartmentId);

    @Transactional
    @Modifying
    @Query("UPDATE Queue u SET u.window = :window WHERE u.id=:id")
    void updateWindow(@Param("window") String window, @Param("id") int id);

    @Query("SELECT q FROM Queue q WHERE q.branchId=:branchId")
    Collection<Queue> findQueuesByBranchId(int branchId);


}