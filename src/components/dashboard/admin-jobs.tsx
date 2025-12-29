'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { 
  Search, Filter, Briefcase, Building, MapPin,
  Eye, Edit, Trash2, CheckCircle, XCircle,
  Calendar, Users, DollarSign, ChevronLeft,
  ChevronRight, TrendingUp, MoreVertical,
  FileText, ExternalLink, Clock
} from 'lucide-react'

interface JobOffer {
  id: string
  title: string
  description: string
  location: string | null
  work_type: string
  experience_level: string
  salary_min: number | null
  salary_max: number | null
  currency: string
  is_active: boolean
  views_count: number
  created_at: string
  deadline: string | null
  employer: {
    company_name: string
    profile: {
      full_name: string
      email: string
    }
  }
  applications_count: number
  pending_applications: number
}

export function JobsManagement() {
  const supabase = createClient()
  
  const [jobs, setJobs] = useState<JobOffer[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      setLoading(true)
      
      const { data: jobsData, error } = await supabase
        .from('job_offers')
        .select(`
          *,
          employer:employers!inner(
            company_name,
            profile:profiles!inner(
              full_name,
              email
            )
          ),
          applications!left (
            id,
            status
          )
        `)
        .order('created_at', { ascending: false })

      if (error) throw error

      const formattedJobs: JobOffer[] = (jobsData || []).map(job => {
        const applications = job.applications || []
        const pending = applications.filter((app: any) => app.status === 'pending').length
        
        return {
          id: job.id,
          title: job.title,
          description: job.description,
          location: job.location,
          work_type: job.work_type,
          experience_level: job.experience_level,
          salary_min: job.salary_min,
          salary_max: job.salary_max,
          currency: job.currency,
          is_active: job.is_active,
          views_count: job.views_count,
          created_at: job.created_at,
          deadline: job.deadline,
          employer: {
            company_name: job.employer.company_name,
            profile: {
              full_name: job.employer.profile.full_name,
              email: job.employer.profile.email
            }
          },
          applications_count: applications.length,
          pending_applications: pending
        }
      })

      setJobs(formattedJobs)
    } catch (error) {
      console.error('Error fetching jobs:', error)
    } finally {
      setLoading(false)
    }
  }

  const toggleJobStatus = async (jobId: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('job_offers')
        .update({ is_active: !currentStatus })
        .eq('id', jobId)

      if (error) throw error

      setJobs(prev => prev.map(job => 
        job.id === jobId ? { ...job, is_active: !currentStatus } : job
      ))
    } catch (error) {
      console.error('Error toggling job status:', error)
    }
  }

  const deleteJob = async (jobId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette offre ?')) {
      return
    }

    try {
      const { error } = await supabase
        .from('job_offers')
        .delete()
        .eq('id', jobId)

      if (error) throw error

      setJobs(prev => prev.filter(job => job.id !== jobId))
      alert('Offre supprimée avec succès')
    } catch (error) {
      console.error('Error deleting job:', error)
      alert('Erreur lors de la suppression')
    }
  }

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      searchTerm === '' ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.employer.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location?.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = 
      statusFilter === 'all' ||
      (statusFilter === 'active' && job.is_active) ||
      (statusFilter === 'inactive' && !job.is_active)
    
    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR')
  }

  const formatSalary = (min: number | null, max: number | null, currency: string) => {
    if (!min && !max) return 'Non spécifié'
    if (min && max) return `${min.toLocaleString()} - ${max.toLocaleString()} ${currency}`
    if (min) return `À partir de ${min.toLocaleString()} ${currency}`
    if (max) return `Jusqu'à ${max.toLocaleString()} ${currency}`
    return 'Non spécifié'
  }

  const getExperienceLabel = (level: string) => {
    const labels: Record<string, string> = {
      'internship': 'Stage',
      'entry': 'Débutant',
      'mid': 'Intermédiaire',
      'senior': 'Senior',
      'lead': 'Lead'
    }
    return labels[level] || level
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-normal text-black">Gestion des offres d'emploi</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchJobs}
              className="px-4 py-2 border border-gray-300 hover:border-gray-400 transition-colors"
            >
              Actualiser
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher par titre, entreprise, localisation..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 focus:outline-none focus:border-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-2.5 border border-gray-300">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                className="focus:outline-none bg-transparent"
              >
                <option value="all">Toutes les offres</option>
                <option value="active">Actives</option>
                <option value="inactive">Inactives</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Table */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-3 text-gray-600">Chargement des offres...</p>
        </div>
      ) : (
        <>
          <div className="border border-gray-300">
            {/* Table Header */}
            <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-300">
              <div className="col-span-4">
                <span className="text-sm font-medium text-gray-700">Offre d'emploi</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm font-medium text-gray-700">Entreprise</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm font-medium text-gray-700">Statistiques</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm font-medium text-gray-700">Date</span>
              </div>
              <div className="col-span-2">
                <span className="text-sm font-medium text-gray-700">Actions</span>
              </div>
            </div>

            {/* Table Rows */}
            {paginatedJobs.length === 0 ? (
              <div className="p-8 text-center">
                <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">Aucune offre trouvée</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {paginatedJobs.map((job) => (
                  <div key={job.id} className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50 transition-colors">
                    {/* Job Info */}
                    <div className="col-span-4">
                      <div className="flex items-start gap-2 mb-2">
                        <h4 className="font-medium text-gray-900">{job.title}</h4>
                        {job.is_active ? (
                          <span className="px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded">
                            Active
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                            Inactive
                          </span>
                        )}
                      </div>
                      
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {job.location || 'Non spécifié'}
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {getExperienceLabel(job.experience_level)}
                        </div>
                        {job.salary_min && (
                          <div className="flex items-center gap-2">
                            <DollarSign className="w-4 h-4" />
                            {formatSalary(job.salary_min, job.salary_max, job.currency)}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Employer */}
                    <div className="col-span-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Building className="w-4 h-4 text-gray-400" />
                        <p className="font-medium text-sm">{job.employer.company_name}</p>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{job.employer.profile.email}</p>
                    </div>

                    {/* Stats */}
                    <div className="col-span-2">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{job.views_count} vues</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">
                            {job.applications_count} candidatures
                          </span>
                        </div>
                        {job.pending_applications > 0 && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-yellow-700">
                              {job.pending_applications} en attente
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Date */}
                    <div className="col-span-2">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-sm">{formatDate(job.created_at)}</span>
                        </div>
                        {job.deadline && (
                          <div className="text-xs text-gray-500">
                            Échéance: {formatDate(job.deadline)}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="col-span-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => window.open(`/jobs/${job.id}`, '_blank')}
                          className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                          title="Voir l'offre"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                        
                        <button
                          onClick={() => toggleJobStatus(job.id, job.is_active)}
                          className={`p-1 ${job.is_active ? 'text-yellow-400' : 'text-green-400'} hover:bg-gray-100 rounded transition-colors`}
                          title={job.is_active ? 'Désactiver' : 'Activer'}
                        >
                          {job.is_active ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                        </button>
                        
                        <button
                          onClick={() => deleteJob(job.id)}
                          className="p-1 text-red-400 hover:text-red-600 hover:bg-gray-100 rounded transition-colors"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-300">
              <div className="text-sm text-gray-600">
                Affichage de {startIndex + 1} à {Math.min(startIndex + itemsPerPage, filteredJobs.length)} sur {filteredJobs.length} offres
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(page => 
                    page === 1 || 
                    page === totalPages || 
                    Math.abs(page - currentPage) <= 1
                  )
                  .map((page, index, array) => (
                    <div key={page}>
                      {index > 0 && array[index - 1] !== page - 1 && (
                        <span className="px-2 text-gray-400">...</span>
                      )}
                      <button
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 text-sm ${
                          currentPage === page
                            ? 'bg-black text-white'
                            : 'border border-gray-300 hover:border-gray-400'
                        }`}
                      >
                        {page}
                      </button>
                    </div>
                  ))
                }
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}